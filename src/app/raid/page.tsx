import { MapPin, Calendar, Users, Target, Trophy, Camera, Heart, Compass } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function RaidPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Notre défi
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Raid Amazones 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Une aventure sportive extraordinaire au cœur de l&apos;Amazonie pour porter 
              la mémoire de Magali et sensibiliser à la lutte contre les cancers du sang.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-2xl">L&apos;Amazonie nous attend</CardTitle>
                <CardDescription>
                  6 jours d&apos;aventure dans l&apos;un des écosystèmes les plus extraordinaires du monde
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Le Raid Amazones nous emmènera au cœur de la forêt amazonienne, entre 
                  la Guyane française et le Brésil. Un territoire sauvage et préservé où 
                  nous découvrirons des paysages à couper le souffle et une biodiversité 
                  exceptionnelle.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-sm">Date prévue : Mars 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm">Lieu : Amazonie (Guyane-Brésil)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-sm">Équipes de 3 femmes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-2xl">Les épreuves</CardTitle>
                <CardDescription>
                  Un défi sportif complet qui testera nos limites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <Compass className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Course d&apos;orientation</h4>
                      <p className="text-sm text-muted-foreground">Navigation en forêt dense</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <h4 className="font-semibold">VTT</h4>
                      <p className="text-sm text-muted-foreground">Parcours techniques sur sentiers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Course à pied</h4>
                      <p className="text-sm text-muted-foreground">Trail en terrain varié</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <h4 className="font-semibold">Canoë</h4>
                      <p className="text-sm text-muted-foreground">Navigation sur rivières amazoniennes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">Objectif de collecte</CardTitle>
                  <CardDescription className="text-white/90">
                    Financer notre participation et soutenir la recherche
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Progression actuelle</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Collecté</span>
                      <span className="text-2xl font-bold text-primary">2 500 €</span>
                    </div>
                    <Progress value={25} className="h-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Objectif</span>
                      <span className="text-2xl font-bold text-accent">10 000 €</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <a href="/don">
                        <Heart className="mr-2 h-5 w-5" />
                        Nous soutenir
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Utilisation des fonds</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inscription au raid</span>
                      <span className="font-semibold">3 000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Transport et hébergement</span>
                      <span className="font-semibold">2 500 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Équipement sportif</span>
                      <span className="font-semibold">1 500 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Frais d&apos;organisation</span>
                      <span className="font-semibold">1 000 €</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-sm font-semibold">Don aux associations</span>
                      <span className="font-bold text-accent">2 000 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Camera className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Notre préparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Suivez notre aventure dès maintenant ! Nous partageons régulièrement 
                  nos entraînements, nos progrès et nos préparatifs pour ce défi extraordinaire.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Entraînements VTT hebdomadaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Sessions course à pied en nature</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Cours de navigation et orientation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Sorties canoë en rivière</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-accent mb-4" />
                <CardTitle>Porteur de mémoire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Chaque kilomètre parcouru, chaque effort consenti sera dédié à la 
                  mémoire de Magali et à toutes les personnes touchées par les cancers du sang.
                </p>
                <div className="bg-accent/5 p-4 rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    &quot;Nous porterons ton sourire au cœur de l&apos;Amazonie, Magali. 
                    Chaque pas sera un hommage à ta force et à ta joie de vivre.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Suivez notre aventure</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Restez connectés pour vivre cette aventure avec nous. Nous partagerons 
                régulièrement nos préparatifs, nos entraînements et bien sûr, 
                l&apos;aventure en direct depuis l&apos;Amazonie !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Blog des entraînements
                </Button>
                <Button variant="outline" size="lg">
                  Galerie photos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}