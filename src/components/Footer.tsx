const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Cao Anh. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm opacity-75">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer