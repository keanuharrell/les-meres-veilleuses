import { Heart, Users, Target, Star, Activity, BookOpen, HeartHandshake, Shield, Lightbulb, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Les Mères Veilleuses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ensemble pour la vie
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Nous sommes trois amies rassemblées par une histoire forte, un engagement sincère et une lumière qui ne s'éteint jamais. À travers le sport et la solidarité, nous avons choisi de transformer l'épreuve en énergie, la perte en projet de vie. Aujourd'hui, nous faisons vivre cette lumière à travers des actions concrètes, au service de celles et ceux qui nous inspirent — ici et ailleurs, sur Terre ou parmi les étoiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/don">
                  💙 Nous soutenir
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/histoire">
                  🤍 Notre histoire
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nos missions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sport Féminin Solidaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promouvoir le sport féminin comme vecteur de lien, de solidarité, de dépassement de soi et d'émancipation.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Sensibilisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Informer sur les cancers, promouvoir le dépistage précoce et faire entendre la voix des patient·es et des proches.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Collecte de fonds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mobiliser des moyens pour la participation à des courses solidaires et le soutien aux associations engagées.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Éducation à la santé et au bien-être</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proposer des actions autour de l&apos;activité physique et de l&apos;écoute de soi.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Transmission et engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Encourager chaque femme à relever des défis personnels ou collectifs porteurs de sens, dans un esprit d'entraide et de partage.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Mémoire et hommage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Faire vivre la mémoire de celles et ceux qui nous ont quittés en transformant l'émotion en action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
              <CardTitle className="text-2xl">Raid Amazones 2025</CardTitle>
              <CardDescription className="text-white/90">
                🗺️ Notre défi sportif au cœur de l&apos;Amazonie
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Un défi extraordinaire</h3>
                  <p className="text-muted-foreground mb-6">
                    Nous participerons au Raid Amazones, une aventure sportive 100 % féminine qui nous mènera au cœur de l'Amazonie. Durant 6 jours, nous combinerons course à pied, VTT, canoë et orientation dans un environnement naturel exceptionnel. Un défi physique… mais surtout une aventure humaine.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/raid">
                      🔵 En savoir plus
                    </a>
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Objectif de collecte</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>💶 Collecté</span>
                      <span className="font-semibold">2 500 €</span>
                    </div>
                    <Progress value={25} className="h-3" />
                    <div className="flex justify-between">
                      <span>🎯 Objectif</span>
                      <span className="font-semibold">10 000 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardHeader className="text-center">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Une étoile qui veille</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Certaines présences continuent d'éclairer nos pas, même dans l'absence. C'est en pensant à elle, à toutes celles et ceux que la maladie a emportés, que nous avons décidé d'agir. Chaque pas, chaque don, chaque sourire partagé est une manière de transmettre cette lumière.
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                💫 Le 5 juillet marque pour nous le début d'un engagement… qui ne fait que commencer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-muted/50 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 Les Mères Veilleuses - Association sportive et solidaire
          </p>
        </div>
      </footer>
    </div>
  );
}
