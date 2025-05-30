'use client';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect } from 'react';
import { cn } from '@/lib/utils'; // Make sure cn utility is available

function Sidebar({ subcategories, selectedCategoryId, setSubcategoryIds }) {
  const form = useForm({
    defaultValues: {
      subcategories: [],
    },
  });

  const watchedSubcategories = form.watch('subcategories');

  useEffect(() => {
    setSubcategoryIds(watchedSubcategories);
  }, [watchedSubcategories, setSubcategoryIds]);

  useEffect(() => {
    form.reset({ subcategories: [] });
  }, [selectedCategoryId, form]);

  return (
    <div className="px-6 py-4   rounded-2xl border border-[#9BCFFF1A] bg-gray-900 text-white">
      <h3 className="text-sm text-[#FFFFFFA3] font-medium mb-4">Subcategories</h3>
      <Form {...form}>
        <form className=" space-y-4 ">
          {subcategories.length > 0 ? (
            subcategories.map((subcategory) => (
              <FormField
                key={subcategory.id}
                control={form.control}
                name="subcategories"
                render={({ field }) => {
                  const isChecked = field.value.includes(subcategory.id);

                  return (
                    <FormItem className="flex items-center  gap-2 ">
                      <FormControl className=" mt-[10px] ">
                        <Checkbox
                          className={cn(
                            "data-[state=checked]:text-[#82C3FF]  data-[state=checked]:border-[#82C3FF]",
                            "   !border-2 !border-[#82C3FFA3]",
                            "transition-colors duration-200"
                          )}
                          checked={isChecked}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, subcategory.id]
                              : field.value.filter((id) => id !== subcategory.id);
                            field.onChange(newValue);
                          }}
                        />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          'transition-colors duration-200',
                          isChecked ? 'text-[#82C3FF]' : 'text-[#FFFFFFA3]'
                        )}
                      >
                        {subcategory.name}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))
          ) : (
            <p>No subcategories available</p>
          )}
        </form>
      </Form>
    </div>
  );
}

export default Sidebar;
