import { Star, Heart, Users, Calendar, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HistoirePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Notre histoire
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Une naissance du cœur
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Découvrez l&apos;histoire de notre association, née de l&apos;amitié et de la douleur, 
              transformée en force et en espoir pour honorer la mémoire de Magali.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 mb-12">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Le 5 juillet - Une date symbolique</CardTitle>
              <CardDescription>
                Le jour qui a tout changé et qui marque le début de notre engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-4xl mx-auto">
                <Quote className="h-8 w-8 text-accent mx-auto mb-6" />
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Ce jour-là, nous avons perdu une amie précieuse, une mère exceptionnelle, 
                  une femme rayonnante. Magali nous a quittés, emportée par un lymphome qui 
                  nous a tous pris de court. Dans cette épreuve, nous avons découvert une 
                  force insoupçonnée : celle de l&apos;amitié, de la solidarité et de l&apos;amour 
                  qui transcende même la mort.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Le 5 juillet n&apos;est pas seulement une date de deuil. C&apos;est le jour où nous 
                  avons décidé de transformer notre peine en action, notre chagrin en espoir, 
                  notre amour pour Magali en mission pour toutes les personnes touchées par 
                  les cancers du sang.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-accent mb-4" />
                <CardTitle>Magali, notre étoile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Magali était bien plus qu&apos;une amie. Elle était cette personne lumineuse 
                  qui illuminait chaque pièce où elle entrait. Mère dévouée, elle veillait 
                  sur ses enfants avec une tendresse infinie. Amie fidèle, elle était 
                  toujours présente dans les moments importants.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Son sourire, sa générosité, sa force face à l&apos;adversité nous inspirent 
                  encore aujourd&apos;hui. Elle nous a appris que même dans la tempête, on peut 
                  garder espoir et continuer à donner aux autres.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-4" />
                <CardTitle>La force de l&apos;amitié</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous sommes trois amies que la vie a réunies et qu&apos;une épreuve terrible 
                  a soudées à jamais. Dans la douleur de perdre Magali, nous avons trouvé 
                  un sens à donner à cette tragédie.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ensemble, nous avons décidé de porter sa mémoire à travers des actions 
                  concrètes. Le sport, qu&apos;elle aimait tant, est devenu notre véhicule pour 
                  sensibiliser et collecter des fonds pour la recherche.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Nos valeurs fondatrices</CardTitle>
              <CardDescription>
                Les principes qui guident chacune de nos actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Solidarité</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous croyons en la force du collectif et de l&apos;entraide
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold">Sororité</h3>
                  <p className="text-sm text-muted-foreground">
                    La bienveillance et le soutien mutuel entre femmes
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Courage</h3>
                  <p className="text-sm text-muted-foreground">
                    Le dépassement de soi au service d&apos;une cause noble
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold">Mémoire</h3>
                  <p className="text-sm text-muted-foreground">
                    Honorer ceux qui nous ont quittés par nos actions
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    La détermination à faire une différence concrète
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold">Inclusion</h3>
                  <p className="text-sm text-muted-foreground">
                    L&apos;ouverture et l&apos;accueil de toutes les bonnes volontés
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">L&apos;équipe fondatrice</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Nous sommes trois femmes unies par l&apos;amitié et animées par la même volonté 
                de faire de notre douleur une force au service des autres.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center space-y-3">
                  <div className="h-24 w-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold">Présidente</h3>
                  <p className="text-sm text-muted-foreground">
                    Porte la vision et coordonne nos actions
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="h-24 w-24 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <Heart className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-semibold">Trésorière</h3>
                  <p className="text-sm text-muted-foreground">
                    Gère les finances et assure la transparence
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="h-24 w-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <Star className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold">Secrétaire</h3>
                  <p className="text-sm text-muted-foreground">
                    Organise et communique sur nos activités
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/contact">
                    Nous rejoindre
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}