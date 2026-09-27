import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "sosek-system"

const cities = ["Warsaw", "Kraków", "Gdańsk", "Wrocław", "Poznań"]

export const Open = () => (
  <div className="flex justify-center pt-2">
    <Combobox items={cities} defaultValue="Kraków" defaultOpen>
      <ComboboxInput placeholder="Select a city" className="w-56" />
      <ComboboxContent>
        <ComboboxEmpty>No cities found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </div>
)
