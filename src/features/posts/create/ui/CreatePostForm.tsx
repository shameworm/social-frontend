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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center mb-4">
              <UserAvatar
                image="https://github.com/shadcn.png"
                fallback="JD"
                className="h-14 w-14"
              />
              <FormField
                form={form}
                name="postContent"
                renderInput={field => (
                  <Textarea {...field} placeholder="What's on your mind?" className="w-full" />
                )}
              />
            </div>

            <div className="flex items-center justify-between">
              <Button variant="ghost" size="lg">
                <FileImage />
                <span>Add image</span>
              </Button>
              <Button size="lg" className="font-semibold">
                Post
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
