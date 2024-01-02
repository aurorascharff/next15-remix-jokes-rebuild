import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Theme = 'yellow' | 'white';

interface ThemeStore {
  theme: Theme;
  setTheme: (_theme: Theme) => void;
}

export const useTheme = create<ThemeStore>()(
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
