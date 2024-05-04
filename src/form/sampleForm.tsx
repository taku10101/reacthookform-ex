import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { sampleFormSchema } from "./sampleSchema";

export function SampleForm() {
  const methods = useForm({
    resolver: zodResolver(sampleFormSchema), //zodResolverでスキーマを指定
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputField name='input' />
        <SelectField name='select' />
        <button type='submit'>Submit</button>
      </form>
    </FormProvider>
  );
}
