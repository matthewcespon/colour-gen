'use client'

import * as React from 'react'
import Link from 'next/link'
import { Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Input } from '@/components/ui/input'

interface NavBarProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const Navbar: React.FC<NavBarProps> = ({
  setFile,
}) => {
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!uploadedFile) return
    console.log('Uploading file:', uploadedFile.name)
    setFile(uploadedFile)

    // Reset the file input
    setUploadedFile(null)
  }

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted to-slate-400 p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Welcome
                        </div>
                        <p className="text-sm leading-tight text-gray-100">Upload an image to generate your own colour palette!</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {/* <ListItem href="/docs" title="Introduction">
                    Learn about our product and its features.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install and set up our application.
                  </ListItem> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium hover:text-gray-600 hidden sm:block">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://www.linkedin.com/in/matthewcespon" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium pl-4 hover:text-gray-600 hidden sm:block">
                  Connect
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium pl-4 hover:text-gray-600">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Input
            type="file"
            onChange={handleFileChange}
            className="max-w-sm"
          />
          <Button onClick={handleUpload} disabled={!uploadedFile} className="w-44">
            <Upload className="mr-2 h-4 w-4" /> {'Generate'}
          </Button>
        </div>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar;

