import { MapPin, Calendar, Users, Target, Trophy, Camera, Heart, Zap, Trees, Mountain } from "lucide-react";
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
              Raid Amazones 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Une aventure sportive, humaine et profondément symbolique au cœur de l&apos;Amazonie, pour faire rayonner la mémoire de Magali et éveiller les consciences sur la lutte contre les cancers du sang.
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
                <CardTitle className="text-2xl">L&apos;Amazonie nous appelle</CardTitle>
                <CardDescription>
                  Six jours d&apos;aventure au sein d&apos;un écrin sauvage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Six jours d&apos;aventure au sein d&apos;un écrin sauvage, là où la nature reprend ses droits et où chaque pas se fait humble. Entre forêts tropicales, rivières mystérieuses et sentiers invisibles, nous avancerons en équipe, portées par l&apos;énergie du vivant, à la frontière du Brésil et de la Guyane.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-sm">📅 Date prévisionnelle : 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm">📍 Lieu : Amazonie (lieu exact à venir)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-sm">👯‍♀️ Équipes 100 % féminines, unies par la solidarité</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-accent mb-4" />
                <CardTitle className="text-2xl">Un défi aux multiples visages</CardTitle>
                <CardDescription>
                  Un raid 100 % féminin, sans moteur ni technologie, en immersion totale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Un appel à se reconnecter à la nature, à sa force intérieure, et à la puissance du collectif.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">🏹 Tir à l&apos;arc</h4>
                      <p className="text-sm text-muted-foreground">précision et calme au cœur de la jungle</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                    <Mountain className="h-5 w-5 text-accent" />
                    <div>
                      <h4 className="font-semibold">🚵‍♀️ VTT</h4>
                      <p className="text-sm text-muted-foreground">pistes techniques et boueuses</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">🏃‍♀️ Trail</h4>
                      <p className="text-sm text-muted-foreground">course en terrain sauvage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                    <Trees className="h-5 w-5 text-accent" />
                    <div>
                      <h4 className="font-semibold">🛶 Canoë</h4>
                      <p className="text-sm text-muted-foreground">descente de rivières au cœur de la jungle</p>
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
                    Soutenir notre projet, c&apos;est financer notre participation, offrir une visibilité à la recherche et transmettre un message d&apos;espoir
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
                      <span className="text-lg">💸 Collecté</span>
                      <span className="text-2xl font-bold text-primary">2 500 €</span>
                    </div>
                    <Progress value={25} className="h-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-lg">🎯 Objectif total</span>
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
                  <h3 className="text-xl font-semibold mb-4">🧾 Répartition prévisionnelle des fonds</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inscription au raid</span>
                      <span className="font-semibold">3 000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Transport & hébergement</span>
                      <span className="font-semibold">2 500 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Équipement & matériel</span>
                      <span className="font-semibold">1 500 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Frais logistiques</span>
                      <span className="font-semibold">1 000 €</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-sm font-semibold">Don à des associations de lutte contre les cancers du sang</span>
                      <span className="font-bold text-accent">2 000 €</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                    <p className="text-sm italic text-muted-foreground">💖 Chaque euro compte. Merci pour votre soutien.</p>
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
                  L&apos;aventure a déjà commencé ! Nous nous entraînons, nous tombons, nous nous relevons. Ensemble. Parce qu&apos;avant d&apos;atteindre l&apos;Amazonie, il faut d&apos;abord se dépasser ici.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-sm">🔹 Entraînements hebdomadaires (VTT, course)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    <span className="text-sm">🛶 Sorties en canoë</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-sm">🔹 Tir à l&apos;arc en extérieur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-accent rounded-full"></div>
                    <span className="text-sm">🔹 Renforcement mental et physique</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-accent mb-4" />
                <CardTitle>Porteuses de mémoire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Chaque foulée, chaque pagaie, chaque souffle sera dédié à Magali, et à toutes celles et ceux qui luttent contre les cancers du sang. Parce qu&apos;il y a des combats invisibles qu&apos;il faut faire résonner loin, jusque dans la jungle.
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
                Restez connectés. Le chemin commence ici, mais il se poursuit en vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  🔗 Blog des entraînements
                </Button>
                <Button variant="outline" size="lg">
                  📷 Galerie photos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}