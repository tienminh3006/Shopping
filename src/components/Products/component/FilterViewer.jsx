import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@mui/material";

FilterViewer.propTypes = {};

function FilterViewer({ filters = {}, onChange = null }) {
  const FILTER_LIST = [
    {
      id: 1,
      getLabel: (filters) => "Giao hang mien phi",
      isActive: (filters) => filters.isFreeShip,
      isVisible: (filters) => true,
      isRemovable: false,
      onRemove: (filters) => {},
      onToggle: (filters) => {
        console.log(filters);
        const newFilter = { ...filters };
        // console.log(newFilter);
        if (newFilter.isFreeShip) {
          delete newFilter.isFreeShip;
        } else {
          newFilter.isFreeShip = true;
        }
      },
    },
    {
      id: 2,
      getLabel: (filters) => "Co khuyen mai",
      isActive: (filters) => true,
      isVisible: (filters) => filters.isPromotion,
      isRemovable: false,
      onRemove: (filters) => {
        const newFilter = { ...filters };
        // console.log(newFilter);
        delete newFilter.isPromotion;
        return newFilter;
      },
      onToggle: (filters) => {},
    },
    {
      id: 3,
      getLabel: (filters) =>
        `Tu ${filters.salePrice_gte} den ${filters.salePrice_lte}`,
      isActive: (filters) =>
        Object.keys(filters).includes("salePrice_lte") &&
        Object.keys(filters).includes("salePrice_gte"),
      isVisible: (filters) => true,
      isRemovable: false,
      onRemove: (filters) => {
        const newFilter = { ...filters };
        // console.log(newFilter);
        delete newFilter.salePrice_lte;
        delete newFilter.salePrice_gte;
        return newFilter;
      },
      onToggle: (filters) => {},
    },
  ];
  //   console.log(onChange);
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <Box>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onDelete={
              x.isRemovable
                ? () =>
                    x.isRemovable
                      ? null
                      : () => {
                          // console.log("FilterView");
                          // console.log(onChange);
                          // console.log(filters);
                          if (!onChange) return;
                          const newFilter = x.onToggle(filters);
                          console.log(newFilter);
                          onChange(newFilter);
                        }
                : null
            }
            onClick={
              //   () => console.log("FilterView")
              x.isRemovable
                ? null
                : () => {
                    // console.log("FilterView");
                    // console.log(onChange);
                    // console.log(filters);
                    if (!onChange) return;
                    const newFilter = x.onRemove(filters);
                    console.log(newFilter);
                    onChange(newFilter);
                  }
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
