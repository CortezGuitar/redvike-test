import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { Image } from "primereact/image";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetAllPokemonQuery } from "../../services/pokemon";
import { useNavigate } from "react-router-dom";

export interface Pokemon {
  name: string;
  url: string;
}

export const Home = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(20);

  const { data, isSuccess } = useGetAllPokemonQuery(151);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const selectPokemon = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div className="container p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pokedex</h1>
      <div
        className={
          "grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-4"
        }
      >
        {isSuccess &&
          data?.results.slice(first, first + rows).map((item: Pokemon) => {
            const { name, url } = item;
            const urlObj = new URL(url);
            const id = urlObj.pathname.substring(
              16,
              urlObj.pathname.length - 1,
            );

            return (
              <Card
                className={
                  "border-2 p-4 text-center flex justify-center cursor-pointer"
                }
                key={name}
                onClick={() => selectPokemon(name)}
              >
                <div className={"mb-3 "}>
                  <Image
                    src={require(`../../assets/${id}.png`)}
                    alt={name}
                    width="100"
                  />
                </div>
                <Button className={"font-bold capitalize"}>{name}</Button>
              </Card>
            );
          })}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={data?.results.length}
        onPageChange={onPageChange}
      />
    </div>
  );
};
