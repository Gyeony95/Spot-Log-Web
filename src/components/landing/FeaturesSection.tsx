import { Card, CardContent } from "../../components/ui/card"
import { MapPin, Camera, Share2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "위치 기반 기록",
      description: "당신이 방문한 모든 특별한 장소를 자동으로 기록하고 관리하세요."
    },
    {
      icon: Camera,
      title: "사진 및 메모",
      description: "각 장소에 대한 사진과 메모를 추가하여 더욱 풍부한 기록을 남기세요."
    },
    {
      icon: Share2,
      title: "공유하기",
      description: "친구들과 당신의 특별한 순간을 쉽게 공유하고 소통하세요."
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          주요 기능
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="pt-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 