import { Toaster } from "@/components/ui/toaster.tsx";
import ContentWrapper from "@/components/ContentWrapper.tsx";
import { TagsContent } from "@/components/TagsContent.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { useState } from "react";
import PrimaryActionButton from "@/components/buttons/PrimaryActionButton.tsx";
import { PlusCircle } from "lucide-react";
import CreateOrModifyTagDialog from "@/components/CreateOrModifyTagDialog.tsx";

export default function TagsManager() {
  const [currentTagId, setCurrentTagId] = useState<string | null>(null);

  return (
    <>
      <Toaster />
      <CreateOrModifyTagDialog
        currentTagId={currentTagId}
        setCurrentTagId={setCurrentTagId}
      />
      <ContentWrapper pagePaths={["Dashboard", "Tags Manager"]}>
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <PrimaryActionButton
                onClickHandler={() => setCurrentTagId("new")}
                icon={<PlusCircle className="h-3.5 w-3.5" />}
              >
                Create new tag
              </PrimaryActionButton>
            </div>
          </div>
          <TagsContent setCurrentTagId={setCurrentTagId} />
        </Tabs>
      </ContentWrapper>
    </>
  );
}
