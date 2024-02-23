import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Not in use, but here for reference
type Theme = 'yellow' | 'white';

type ThemeStore = {
  theme: Theme;
  setTheme: (_theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()(
  devtools(set => {
    return {
      setTheme: theme => {
        return set(
          () => {
            return {
              theme,
            };
          },
          false,
          'setTheme',
        );
      },
      theme: 'yellow',
    };
  }),
);
