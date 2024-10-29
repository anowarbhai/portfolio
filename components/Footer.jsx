import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row justify-between items-center">
                <Logo light={true} />
                <div className="text-white/70 font-light">
                    Copyright &copy; 2024, All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
  )
}
