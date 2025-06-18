import { FileImage } from 'lucide-react';

import { Card, CardContent } from '@/shared/ui/card';
import { UserAvatar } from '@/shared/ui/avatar';
import { Form, FormField } from '@/shared/ui/form';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';

import { useCreatePostForm } from '../hooks';

export function CreatePostForm() {
  const { form, onSubmit } = useCreatePostForm();

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-4">
              <UserAvatar
                image="https://github.com/shadcn.png"
                fallback="JD"
                className="h-12 w-12"
              />
              <FormField
                form={form}
                name="postContent"
                className="flex-1"
                renderInput={field => (
                  <Textarea
                    {...field}
                    placeholder="What's on your mind?"
                    className="resize-none w-full"
                  />
                )}
              />
            </div>

            <div className="flex justify-between items-center">
              <Button variant="ghost" size="sm" className="gap-2">
                <FileImage className="w-4 h-4" />
                <span className="text-sm">Add image</span>
              </Button>
              <Button size="sm" className="font-medium px-6">
                Post
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
