@description('The location into which your Azure resources should be deployed.')
param location string = resourceGroup().location

@description('Select the type of environment you want to provision. Allowed values are production and staging.')
@allowed([
  'production'
  'staging'
])
param environmentType string

@description('Input the name of the app and its resources will be named after it.')
param appName string

@secure()
@description('Input the database server admin username.')
param databaseAdminUsername string

@secure()
@description('Input the database server admin password.')
param databaseAdminPassword string

var suffix = environmentType == 'production' ? '' : '-${environmentType}'

var appServiceName = 'app-${appName}${suffix}'
var appServicePlanName = 'asp-${appName}${suffix}'
var databaseServerName = 'sql-${appName}${suffix}'
var databaseName = 'sqldb-${appName}${suffix}'
var shadowDatabaseName = 'sqldb-${appName}-shadow${suffix}'

resource databaseServer 'Microsoft.Sql/servers@2022-11-01-preview' = {
  properties: {
    administratorLogin: databaseAdminUsername
    administratorLoginPassword: databaseAdminPassword
    version: '12.0'
    minimalTlsVersion: '1.2'
    publicNetworkAccess: 'Enabled'
    administrators: {
      administratorType: 'ActiveDirectory'
      principalType: 'User'
      login: 'aurora.walberg@inmeta.no'
      sid: '8bb88ed7-57ff-4d8e-b68e-bcbd4de558e0'
      tenantId: '8f47ad71-44ca-48bf-afe3-56b9360a4495'
      azureADOnlyAuthentication: false
    }
    restrictOutboundNetworkAccess: 'Disabled'
  }
  location: location
  tags: {}
  name: databaseServerName
}

resource database 'Microsoft.Sql/servers/databases@2022-11-01-preview' = {
  parent: databaseServer
  sku: {
    name: 'GP_S_Gen5'
    tier: 'GeneralPurpose'
    family: 'Gen5'
    capacity: 1
  }
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    maxSizeBytes: 34359738368
    catalogCollation: 'SQL_Latin1_General_CP1_CI_AS'
    zoneRedundant: false
    readScale: 'Disabled'
    autoPauseDelay: 60
    requestedBackupStorageRedundancy: 'Local'
    minCapacity: json('0.5000')
    isLedgerOn: false
    availabilityZone: 'NoPreference'
  }
  location: location
  tags: {}
  name: databaseName
}
resource shadowDatabase 'Microsoft.Sql/servers/databases@2022-11-01-preview' = {
  parent: databaseServer
  sku: {
    name: 'GP_S_Gen5'
    tier: 'GeneralPurpose'
    family: 'Gen5'
    capacity: 1
  }
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    maxSizeBytes: 34359738368
    catalogCollation: 'SQL_Latin1_General_CP1_CI_AS'
    zoneRedundant: false
    readScale: 'Disabled'
    autoPauseDelay: 60
    requestedBackupStorageRedundancy: 'Local'
    minCapacity: json('0.5000')
    isLedgerOn: false
    availabilityZone: 'NoPreference'
  }
  location: location
  tags: {}
  name: shadowDatabaseName
}

resource appServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: appServicePlanName
  kind: 'linux'
  location: location
  properties: {
    perSiteScaling: false
    elasticScaleEnabled: false
    maximumElasticWorkerCount: 1
    isSpot: false
    freeOfferExpirationTime: '2023-09-17T07:28:43.3166667'
    reserved: true
    isXenon: false
    hyperV: false
    targetWorkerCount: 0
    targetWorkerSizeId: 0
    zoneRedundant: false
  }
  sku: {
    name: 'B1'
    tier: 'Basic'
    size: 'B1'
    family: 'B'
    capacity: 1
  }
}

resource appService 'Microsoft.Web/sites@2022-09-01' = {
  name: appServiceName
  kind: 'app,linux'
  location: location
  tags: {}
  properties: {
    enabled: true
    serverFarmId: appServicePlan.id
    reserved: true
    isXenon: false
    hyperV: false
    vnetRouteAllEnabled: false
    vnetImagePullEnabled: false
    vnetContentShareEnabled: false
    siteConfig: {
      numberOfWorkers: 1
      linuxFxVersion: 'NODE|18-lts'
      acrUseManagedIdentityCreds: false
      alwaysOn: false
      http20Enabled: false
      functionAppScaleLimit: 0
      minimumElasticInstanceCount: 0
      appSettings: [
        {
          name: 'DATABASE_URL'
          value: 'sqlserver://sql-${appName}.database.windows.net:1433;database=sqldb-${appName};integratedSecurity=false;user=${databaseAdminUsername};password=${databaseAdminPassword};trustServerCertificate=false;encrypt=true'
        }
        {
          name: 'SHADOW_DATABASE_URL'
          value: 'sqlserver://sql-${appName}.database.windows.net:1433;database=sqldb-${appName}-shadow;integratedSecurity=false;user=${databaseAdminUsername};password=${databaseAdminPassword};trustServerCertificate=false;encrypt=true'
        }
      ]
      appCommandLine: 'pm2 --no-daemon start  ecosystem.config.js'
    }
    scmSiteAlsoStopped: false
    clientAffinityEnabled: false
    clientCertEnabled: false
    clientCertMode: 'Required'
    hostNamesDisabled: false
    containerSize: 0
    dailyMemoryTimeQuota: 0
    httpsOnly: true
    redundancyMode: 'None'
    publicNetworkAccess: 'Enabled'
    storageAccountRequired: false
    keyVaultReferenceIdentity: 'SystemAssigned'
  }
}
