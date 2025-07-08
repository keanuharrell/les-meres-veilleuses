import { Target, Users, Heart, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AssociationPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              L&apos;association
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Les Mères Veilleuses
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Découvrez le fonctionnement, les projets et les objectifs de notre association 
              sportive et solidaire, née en mémoire de Magali.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-12">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Descriptif du projet sportif et solidaire</CardTitle>
              <CardDescription>
                Notre mission née de la volonté de porter un message de sensibilisation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Le projet de l&apos;association « Les Mères Veilleuses » est né de la volonté de ses 
                  membres de porter un message de sensibilisation à la lutte contre les cancers, 
                  en mémoire de leur amie Magali, décédée d&apos;un lymphome en 2025, privant une 
                  petite fille de sa maman.
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Objectif 1</h3>
                        <p className="text-muted-foreground">
                          Promouvoir la pratique sportive féminine à travers la participation 
                          à des événements caritatifs, reconnus et médiatisés
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Objectif 2</h3>
                        <p className="text-muted-foreground">
                          Porter un message de sensibilisation à la lutte contre les cancers 
                          du sang, et en soutien à toutes les femmes touchées par ces maladies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Nos actions concrètes</CardTitle>
              <CardDescription>
                Comment nous mettons en œuvre notre mission au quotidien
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg">
                    <Award className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Participation sportive</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        La participation active au <strong>RAID AMAZONES</strong>, un raid multisport 
                        100% féminin et solidaire et à tout autre événement sportif nécessitant 
                        des droits d&apos;inscription ou non.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-accent/5 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Communication et sensibilisation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        L&apos;organisation d&apos;événements et d&apos;actions de communication autour de la 
                        cause des lymphomes et leucémies (réseaux sociaux, presse locale, événements solidaires).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg">
                    <Heart className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Soutien financier</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Le reversement de tout ou partie des excédents budgétaires de l&apos;association 
                        à une structure reconnue d&apos;utilité publique œuvrant dans ce domaine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Notre objectif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Au travers de ce projet, nous souhaitons mobiliser un large public et 
                  encourager les dons et soutiens aux actions de recherche et de soutien 
                  aux malades. Chaque action compte dans cette chaîne de solidarité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-4" />
                <CardTitle>Fonctionnement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;association fonctionne grâce à l&apos;engagement de ses membres bénévoles 
                  et au soutien de ses partenaires. Chaque euro collecté est utilisé avec 
                  transparence pour servir notre cause.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Rejoignez notre mission</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Que vous souhaitiez participer à nos événements, nous soutenir financièrement 
                ou simplement relayer notre message, chaque geste compte dans notre combat 
                contre les cancers du sang.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/don">
                    <Heart className="mr-2 h-5 w-5" />
                    Faire un don
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Nous rejoindre
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/raid">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Suivre le Raid
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