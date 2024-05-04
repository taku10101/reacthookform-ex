import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const sampleFormSchema = z.object({
  input: z.string().nonempty({
    message: "inputは必須です",
  }),
  select: z.string().nonempty({
    message: "selectは必須です",
  }),
});

function App() {
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
type Props = {
  name: string;
};

function SelectField(props: Props) {
  const methods = useFormContext();
  return (
    <>
      <select {...methods.register(props.name)}>
        {["", "one", "two", "three"].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      {methods.formState.errors[props.name] && (
        <p>{methods.formState.errors[props.name]?.message as string}</p>
      )}
    </>
  );
}

function InputField(props: Props) {
  const methods = useFormContext();

  return (
    <>
      <input {...methods.register(props.name)} />
      {methods.formState.errors[props.name] && (
        <p>{methods.formState.errors[props.name]?.message as string}</p>
      )}
    </>
  );
}

export default App;
