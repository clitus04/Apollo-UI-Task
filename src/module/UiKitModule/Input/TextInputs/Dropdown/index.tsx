import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { memo, useCallback, useState } from "react";

function Dropdown() {
  const defaultSuggestions = [
    "a",
    "aa",
    "aaa",
    "b",
    "bb",
    "bbb",
    "c",
    "cc",
    "ccc",
  ];
  const [suggestions, setSuggestions] = useState<string[]>(defaultSuggestions);
  const [value, setValue] = useState<string>("");

  const handleSuggestion = useCallback(
    (e: AutoCompleteCompleteEvent) => {
      let filteredValues;
      if (!e.query.trim().length) {
        filteredValues = defaultSuggestions;
      } else {
        filteredValues = defaultSuggestions.filter((item: string) =>
          item.startsWith(e.query)
        );
      }
      setSuggestions(filteredValues);
    },
    [defaultSuggestions]
  );

  return (
    <AutoComplete
      placeholder="Search"
      className="w-full"
      dropdown
      suggestions={suggestions}
      completeMethod={handleSuggestion}
      value={value}
      onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)}
    />
  );
}

export default memo(Dropdown);
