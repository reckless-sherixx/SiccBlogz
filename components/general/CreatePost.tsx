"use client"

import { handleSubmission } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Loading..." : "Create Post"}
        </Button>
    );
}
export function CreatePost() {
    return (
        <div>
            < Card className="max-w-lg mx-auto" >
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Create a new post to share with the world</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={handleSubmission}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input name="title" required placeholder="Title" type="text" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea name="content" required placeholder="Content" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input name="url" required placeholder="Image URL" type="url" />
                        </div>

                        <SubmitButton />
                    </form>
                </CardContent>
            </Card >
        </div>
    )
}