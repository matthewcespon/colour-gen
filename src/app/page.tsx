import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {

  const samplePalettes = [
    ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
    ['#FADDE1', '#FFC4D6', '#FFA6C1', '#FF87AB', '#FF5D8F'],
    ['#05668D', '#028090', '#00A896', '#02C39A', '#F0F3BD'],
    ['#03071E', '#370617', '#6A040F', '#9D0208', '#D00000'],
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">PaletteGen</h1>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4">
        <section className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-700">Create Stunning Color Palettes</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inspire your designs with beautifully crafted color combinations. Generate, explore, and save your perfect palette.
          </p>
          <Link href="/generate">
            <Button size="lg" className="transition ease-in-out delay-150 bg-blue-500 hover:scale-105 hover:bg-black duration-300">
              Get started

              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>

        <section className="py-20">
          <h3 className="text-3xl font-bold text-center mb-12">Discover Inspiring Palettes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {samplePalettes.map((palette, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="flex h-32 hover:h-full transition-all duration-200">
                  {palette.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  ></div>
                  ))}
                </div>
                <div className="p-4 ">
                  <h4 className="text-lg font-semibold mb-2">Palette {index + 1}</h4>
                  <div className="flex justify-between">
                    {palette.map((color, colorIndex) => (
                      <span key={colorIndex} className="text-sm">{color}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">PaletteGen</h3>
              <p>Create beautiful color palettes with ease</p>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} PaletteGen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

