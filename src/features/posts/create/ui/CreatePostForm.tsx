import { FileImage, Smile, MapPin } from 'lucide-react';

import { Card, CardContent } from '@/shared/ui/card';
import { UserAvatar } from '@/shared/ui/avatar';
import { Form, FormField } from '@/shared/ui/form';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';

import { useCreatePostForm } from '../hooks';

export function CreatePostForm() {
  const { form, onSubmit } = useCreatePostForm();

  return (
    <Card className="hover:shadow-md hover:shadow-black/15 transition-all duration-200">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-3">
              <UserAvatar
                image="https://github.com/shadcn.png"
                fallback="JD"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="font-medium text-sm text-foreground">Create a post</span>
                <span className="text-xs text-muted-foreground">Share what's on your mind</span>
              </div>
            </div>

            <FormField
              form={form}
              name="postContent"
              className="lg:min-w-xl"
              renderInput={field => (
                <Textarea
                  {...field}
                  placeholder="What's on your mind?"
                  className="min-h-32 resize-none border-2 shadow-none p-4 text-base placeholder:text-muted-foreground/60 focus-visible:ring-0 bg-muted/30 rounded-lg w-full"
                />
              )}
            />

            <div className="flex justify-between items-center pt-3 border-t border-border/50">
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                >
                  <FileImage className="w-4 h-4" />
                  <span className="text-sm hidden sm:inline">Photo</span>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                >
                  <Smile className="w-4 h-4" />
                  <span className="text-sm hidden sm:inline">Emoji</span>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm hidden sm:inline">Location</span>
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  size="sm"
                  className="font-medium px-6 disabled:opacity-50 transition-all"
                >
                  Post
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
