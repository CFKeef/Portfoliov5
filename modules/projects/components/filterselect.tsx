import React from 'react';
import {Select} from "@chakra-ui/react";

type Item = { label: string; value: string };

interface SelectProps {
    data: Item[];
    onSelect: (value:string) => void;
}

const FilterSelect: React.FunctionComponent<SelectProps> = (props) => {
    const {data, onSelect} = props;

    const renderFilterOptions = () => {
        return data.map((element, index) =>(<option key={index} value={element.value}>{element.label}</option>))
    }

    return (
        <Select
            bg={"neonPink"}
            onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => onSelect(e.target.value)}
            placeholder={"Select Tech to filter for"}>
            {renderFilterOptions()}
        </Select>
    )
}

export default FilterSelect;