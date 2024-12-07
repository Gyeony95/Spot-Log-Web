import { Button } from "../../components/ui/button"
import { AppleIcon, GooglePlayIcon } from "./Icons"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          지금 바로 시작하세요
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          App Store와 Google Play에서 SpotLog를 만나보세요.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg" className="gap-2">
            <AppleIcon className="w-5 h-5" />
            App Store
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <GooglePlayIcon className="w-5 h-5" />
            Google Play
          </Button>
        </div>
      </div>
    </section>
  )
} 