import { memo, useCallback, useState } from "react";
import { countries } from "../floatLabel.data";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

function CustomAutoComplete() {
  const [autocompleteValue, setAutocompleteValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const filterMember = useCallback(
    (e: AutoCompleteCompleteEvent) => {
      let filteredMembers;
      if (!e.query.trim().length) {
        filteredMembers = [...countries];
      } else {
        filteredMembers = countries.filter((country: string) =>
          country.toLowerCase().startsWith(e.query.toLowerCase())
        );
      }

      setSuggestions(filteredMembers);
    },
    [countries]
  );

  return (
    <AutoComplete
      suggestions={suggestions}
      completeMethod={filterMember}
      value={autocompleteValue}
      id="input3"
      className="mt-2"
      onChange={(e: AutoCompleteChangeEvent) => setAutocompleteValue(e.value)}
      invalid
    />
  );
}

export default memo(CustomAutoComplete);
