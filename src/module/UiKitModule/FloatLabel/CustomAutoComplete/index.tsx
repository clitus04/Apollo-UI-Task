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
    <span className="p-float-label">
      <AutoComplete
        suggestions={suggestions}
        completeMethod={filterMember}
        value={autocompleteValue}
        id="input2"
        onChange={(e: AutoCompleteChangeEvent) => setAutocompleteValue(e.value)}
      />
      <label htmlFor="input2">AutoComplete</label>
    </span>
  );
}

export default memo(CustomAutoComplete);
