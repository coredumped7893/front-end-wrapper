import { ExcaliApi } from "@/lib/api/excali-api.ts";
import { useTagsFilterStore } from "@/providers/TagsFilterProvider/TagsFilterProvider.tsx";
import { useQuery } from "@tanstack/react-query";
import { ComboBox } from "@/components/ComboBox.tsx";

export function SelectTags() {
  const { selectedTags, onSelect, getSelectedTagsName } = useTagsFilterStore(
    (s) => s,
  );

  const { data = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: ExcaliApi.getCanvasTags,
  });

  const tags = data.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  console.log({ xd: data });

  const selectedLabel = getSelectedTagsName(data);

  return (
    <ComboBox
      data={tags}
      selectedData={selectedTags}
      selectedValueLabel={selectedLabel}
      onSelect={onSelect}
      placeholder="Select tags..."
    />
  );
}
