import { Box, Container, makeStyles, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import productsApi from "../../../../api/productApi";
import FilterViewer from "../component/FilterViewer";
import ProductFilters from "../component/ProductFilters";
import ProductList from "../component/ProductList";
import ProductSkeleton from "../component/ProductSkeleton";
import ProductSort from "../component/ProductSort";
import { useMemo } from "react";

//Su dung Queryparams

Listpage.propTypes = {};

function Listpage(props) {
  const [productList, setProductlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  console.log(queryParams);
  const history = useHistory();
  console.log(location);
  console.log(history);
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    total: 10,
  });

  // const [filter, setFilter] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort || "salePrice:ASC",
  // }));
  const useStyles = makeStyles((theme) => ({
    root: {},
    container: {
      display: " flex",
      flexWrap: " nowrap",
      marginLeft: "-4px",
      marginRight: "-4px",
      justifyContent: "space-around",
    },
    left: {
      paddingLeft: "4px",
      paddingRight: "4px",
      flex: "0 0 23.5%",
      maxWidth: "23.5%",
      textAlign: "center",
      paddingBottom: "18px",
    },
    right: {
      // padding: "0 20px",
      flex: "0 0 75%",
      maxWidth: "75%",
      paddingLeft: "4px",
      paddingRight: "4px",
    },
    pagination: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      marginTop: "20px",
      paddingBottom: "20px",
    },
    filter: {
      paddingLeft: "20px",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        // console.log(queryParams);
        const { data, pagination } = await productsApi.getAll(queryParams);
        setProductlist(data);
        setPagination(pagination);
      } catch (err) {
        console.log(err, "productsfeature");
      }
      setLoading(false);
    })();
  }, [queryParams]);
  const handlePageChange = function (e, page) {
    // setFilter((prevFilter) => ({ ...prevFilter, _page: page }));
    const filter = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  const handleSortChange = function (newSortValue) {
    // console.log(newSortValue);
    // setFilter((prevFilter) => ({ ...prevFilter, _sort: newSortValue }));
    const filter = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  const handleFiltersChange = function (newFilter) {
    // console.log("setFilter" + newFilter);
    // setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
    const filter = {
      ...queryParams,
      ...newFilter,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  const setNewFilters = (newFilters) => {
    // setFilter(newFilters);
    //ListPage
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filter),
  //   });
  // }, [filter]);
  return (
    <Box className="grid wide">
      <Grid container spacing={1} className={classes.container}>
        <Grid className={classes.left}>
          <Paper elevation={0}>
            <ProductFilters
              filters={queryParams}
              onChange={handleFiltersChange}
            ></ProductFilters>
          </Paper>
        </Grid>
        <Grid className={classes.right}>
          <Paper elevation={0}>
            <ProductSort
              currentSort={queryParams._sort}
              onchange={handleSortChange}
            ></ProductSort>
            <FilterViewer
              className={classes.filter}
              filters={queryParams}
              onChange={setNewFilters}
            ></FilterViewer>
            {isLoading ? (
              <ProductSkeleton length={12} />
            ) : (
              <ProductList data={productList}></ProductList>
            )}
            <Box className={classes.pagination}>
              <Pagination
                color="primary"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePageChange}
              ></Pagination>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Listpage;
