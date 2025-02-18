import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const formSchema = z.object({
  roastLevel: z.string(),
  brewMethod: z.string(),
  flavorProfile: z.string(),
  caffeinePreference: z.string(),
});

export function CoffeePreferenceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roastLevel: "",
      brewMethod: "",
      flavorProfile: "",
      caffeinePreference: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <Typography.H2>Coffee Preferences</Typography.H2>
        <Typography.Muted>
          Tell us your preferences and our AI will recommend the perfect coffee for you
        </Typography.Muted>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="roastLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roast Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select roast level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="light">Light Roast</SelectItem>
                      <SelectItem value="medium">Medium Roast</SelectItem>
                      <SelectItem value="dark">Dark Roast</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brewMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Brewing Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select brewing method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="drip">Drip Coffee</SelectItem>
                      <SelectItem value="espresso">Espresso</SelectItem>
                      <SelectItem value="french">French Press</SelectItem>
                      <SelectItem value="pourover">Pour Over</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flavorProfile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Flavor Profile</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select flavor profile" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fruity">Fruity & Bright</SelectItem>
                      <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
                      <SelectItem value="caramel">Caramel & Sweet</SelectItem>
                      <SelectItem value="bold">Bold & Intense</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="caffeinePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Caffeine Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select caffeine preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="decaf">Decaf</SelectItem>
                      <SelectItem value="half">Half-Caf</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Get AI Recommendation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}