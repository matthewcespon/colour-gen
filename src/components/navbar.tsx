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
import { useToast } from "@/hooks/use-toast"
import { useState } from 'react'

interface NavBarProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  activeTab: string;
}

const Navbar: React.FC<NavBarProps> = ({
  setFile,
  activeTab,
}) => {
  const { toast } = useToast()
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!uploadedFile) return
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase();

    if (fileExtension && validExtensions.includes(fileExtension)) {
      setFile(uploadedFile);
      toast({
        variant: "default",
        title: "Success!",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your image, try uploading a valid image.",
      })
    }

    // Reset the file input
    setUploadedFile(null)
  }

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <Link href="/">
            <h1 className="text-2xl font-bold pr-6 hidden sm:block">PaletteGen</h1>
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-200 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-gray-700">
                          Welcome
                        </div>
                        <p className="text-sm leading-tight text-gray-700">Upload an image to generate your own colour palette!</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Learn about our product and its features.
                  </ListItem>
                  <ListItem href="/docs/installation" title="VisualisePal">Visualise your colour palettes within UI components!</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium pl-4 hover:text-gray-600 hidden sm:block">
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
          </NavigationMenuList>
        </NavigationMenu>
        {activeTab === 'tab-1' && (
          <div className="ml-auto flex items-center space-x-4">
            <Input
              type="file"
              onChange={handleFileChange}
              className="max-w-[16rem] cursor-pointer"
            />
            <Button onClick={handleUpload} disabled={!uploadedFile} className="w-34">
              <Upload className="mr-2 h-4 w-4" /> {'Generate'}
            </Button>
          </div>
          )}
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

