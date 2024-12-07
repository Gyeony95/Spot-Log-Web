import { Card, CardContent } from "../../components/ui/card"
import { Folder, Camera, Share2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Folder,
      title: "쉽고 편한 폴더 정리", 
      description: "방문한 장소들을 폴더로 깔끔하게 정리하고 체계적으로 관리하세요."
    },
    {
      icon: Camera,
      title: "사진 및 메모",
      description: "임장 시 매물의 상태와 특징을 사진과 메모로 꼼꼼하게 기록하세요."
    },
    {
      icon: Share2,
      title: "공유하기(준비중)",
      description: "친구들과 당신의 특별한 순간을 쉽게 공유하고 소통하세요."
    }
  ]

  return (
    <section id="features" className="w-full py-20 bg-gray-900">
      <div className="w-full px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          주요 기능
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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