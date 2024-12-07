import Navbar from '@/components/navbar';

export default function Generate() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold">Palette Gen</h1>
        {/* <p className="mt-4 text-xl">Upload an image</p> */}
      </main>
    </div>
  )
}

