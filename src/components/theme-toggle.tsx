'use client'
import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex flex-row justify-between w-52 mb-12'>
      <button className='rounded-sm  bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground px-2' onClick={() => setTheme('light')}>Light Mode</button>
      <button className='rounded-sm  bg-secondary text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground px-2' onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}