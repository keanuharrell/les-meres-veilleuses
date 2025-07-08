import { Heart, Users, Target, Star } from "lucide-react";
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
            <Badge variant="secondary" className="mb-4">
              Association sportive et solidaire
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Les Mères Veilleuses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ensemble pour la vie
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Nous sommes trois amies unies par la mémoire de Magali, emportée trop tôt par un lymphome. 
              À travers le sport et la solidarité, nous portons sa lumière et celle de toutes les mères 
              veilleuses qui nous inspirent depuis les étoiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/don">
                  <Heart className="mr-2 h-5 w-5" />
                  Nous soutenir
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/histoire">
                  Notre histoire
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sport Féminin Solidaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promouvoir le sport féminin comme vecteur de solidarité et de dépassement de soi
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Sensibilisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sensibiliser aux cancers du sang et à l&apos;importance du dépistage précoce
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Collecte de Fonds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collecter des fonds pour soutenir la recherche contre les cancers du sang
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
                Notre défi sportif au cœur de l&apos;Amazonie
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Un défi extraordinaire</h3>
                  <p className="text-muted-foreground mb-6">
                    Nous participons au Raid Amazones, une aventure sportive unique qui nous mènera 
                    au cœur de l&apos;Amazonie. Cette épreuve de 6 jours combinera course à pied, VTT, 
                    canoë et orientation dans un environnement exceptionnel.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/raid">
                      En savoir plus
                    </a>
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Objectif de collecte</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Collecté</span>
                      <span className="font-semibold">2 500 €</span>
                    </div>
                    <Progress value={25} className="h-3" />
                    <div className="flex justify-between">
                      <span>Objectif</span>
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
              <CardTitle className="text-2xl">En mémoire de Magali</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                &quot;Magali était une mère veilleuse, toujours présente pour ses enfants, sa famille et ses amis. 
                Son sourire illuminait chaque journée et sa force inspirait tous ceux qui l&apos;entouraient. 
                Aujourd&apos;hui, nous portons sa lumière à travers nos actions.&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Le 5 juillet - Une date qui marque le début de notre engagement
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
