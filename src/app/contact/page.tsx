"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Users, Heart, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Message envoyé !</h2>
            <p className="text-muted-foreground mb-6">
              Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-primary/90"
            >
              Envoyer un autre message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Nous contacter
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Vous souhaitez nous rejoindre, nous soutenir ou simplement en savoir plus 
              sur notre mission ? N&apos;hésitez pas à nous contacter !
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-muted-foreground">
                        lesmeresveilleuses57@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-sm text-muted-foreground">
                        06 10 21 31 46
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p className="text-sm text-muted-foreground">
                        6 Square des Côteaux<br />
                        57460 Etzling, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Comment nous rejoindre
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Devenir membre</h4>
                      <p className="text-sm text-muted-foreground">
                        Rejoignez notre association et participez à nos actions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Bénévolat</h4>
                      <p className="text-sm text-muted-foreground">
                        Aidez-nous dans l&apos;organisation de nos événements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Partenariat</h4>
                      <p className="text-sm text-muted-foreground">
                        Entreprises et associations, travaillons ensemble
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Informations légales</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Association loi 1901</p>
                    <p>RNA : W123456789</p>
                    <p>SIRET : 123 456 789 00012</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription>
                  Nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="jean@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="type">Type de demande</Label>
                    <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type de demande" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membre">Devenir membre</SelectItem>
                        <SelectItem value="benevolat">Bénévolat</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="presse">Demande presse</SelectItem>
                        <SelectItem value="information">Demande d&apos;information</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Votre message..."
                      rows={6}
                      className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Rejoignez notre communauté</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Suivez-nous sur les réseaux sociaux pour rester informé de nos actions, 
                de notre préparation au Raid Amazones et de nos événements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Facebook
                </Button>
                <Button variant="outline" size="lg">
                  Instagram
                </Button>
                <Button variant="outline" size="lg">
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}