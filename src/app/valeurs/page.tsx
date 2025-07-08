import { Users, Heart, Target, Calendar, Globe, Star, HandHeart, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ValeursPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Charte de valeurs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Nos Valeurs
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              L&apos;association Les Mères Veilleuses est née du désir de faire rayonner des valeurs 
              fortes à travers le sport solidaire, l&apos;entraide féminine et le souvenir de celles 
              qui nous ont inspirées.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-16">
            <CardContent className="p-8 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Nos engagements communs</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nos engagements communs reposent sur les valeurs suivantes, qui guident chacune 
                de nos actions et créent l&apos;âme de notre association.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8 mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <HandHeart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🤝 Solidarité</CardTitle>
                    <CardDescription>La force du collectif</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous croyons en la force du collectif. Chaque membre est encouragé à soutenir 
                  les autres, à s&apos;entraider dans les épreuves sportives comme dans les défis 
                  personnels. Nous organisons des actions pour aider ceux qui en ont besoin et 
                  contribuons à des causes qui nous dépassent.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🌸 Sororité et bienveillance</CardTitle>
                    <CardDescription>Le respect et l&apos;accueil de toutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous valorisons une relation respectueuse, sans jugement, entre toutes les 
                  participantes. Chacune est accueillie avec ses forces, ses fragilités, son histoire. 
                  Nous veillons les unes sur les autres, comme des étoiles dans un ciel commun.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">💪 Courage et dépassement de soi</CardTitle>
                    <CardDescription>Le sport comme vecteur d&apos;estime de soi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  À travers le sport, nous cherchons à nous dépasser, à retrouver confiance, à relever 
                  ensemble des défis physiques et humains. Nos courses sont des aventures, mais aussi 
                  des vecteurs d&apos;estime de soi, de résilience et d&apos;inspiration.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🎗️ Mémoire et engagement</CardTitle>
                    <CardDescription>Honorer celles qui ne sont plus là</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous portons dans nos cœurs celles qui ne sont plus là. Notre engagement pour la 
                  lutte contre les cancers du sang est une façon d&apos;honorer leur mémoire. Chaque pas, 
                  chaque don, chaque action a du sens.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🌍 Ouverture et inclusion</CardTitle>
                    <CardDescription>Une place pour chacune dans notre aventure</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous croyons que chacun(e) a une place dans notre aventure. L&apos;association est 
                  ouverte à toutes celles qui partagent nos valeurs, quel que soit leur âge, niveau 
                  sportif, origine ou situation. Nos actions se veulent accessibles, respectueuses 
                  et porteuses de lien social.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Notre engagement</CardTitle>
              <CardDescription>
                Ce que signifie rejoindre Les Mères Veilleuses
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En rejoignant l&apos;association Les Mères Veilleuses, chaque membre s&apos;engage à 
                  respecter et faire vivre ces valeurs au quotidien.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ces valeurs ne sont pas de simples mots, mais des engagements concrets qui 
                  orientent nos actions, nos relations et notre façon d&apos;être ensemble. Elles 
                  constituent le cœur battant de notre association et la promesse que nous nous 
                  faisons mutuellement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a href="/contact">
                      <Users className="mr-2 h-5 w-5" />
                      Nous rejoindre
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/association">
                      <Heart className="mr-2 h-5 w-5" />
                      Découvrir l&apos;association
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}