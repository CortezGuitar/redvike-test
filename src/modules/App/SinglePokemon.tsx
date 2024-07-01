import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { Link, useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

export const SinglePokemon = () => {
  const { name } = useParams();

  const { data, isSuccess } = useGetPokemonByNameQuery(name);
  const pokeTypes = data?.types.map((item) => item?.type.name);

  return (
    <div className={"container "}>
      <div className={"font-semibold text-xl mb-6"}>
        <Link to={"/"} className={"font-bold"}>
          Home
        </Link>
        / <span className={"capitalize"}>{name}</span>
      </div>
      <Card className={"lg:w-fit"}>
        {isSuccess && (
          <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className={"mx-auto"}>
              <Image
                src={require(`../../assets/${data?.id}.png`)}
                alt={name}
                width="256"
              />
            </div>
            <div>
              <h1 className={"text-xl font-extrabold capitalize"}>
                {data?.name}
              </h1>
              <div className={"flex justify-between w-full"}>
                <div>
                  <p>
                    <span>Types</span>
                  </p>
                  <p>
                    <span>Height</span>
                  </p>
                  <p>
                    <span>Weight</span>
                  </p>
                  <p>
                    <span>HP</span>
                  </p>
                  <p>
                    <span>Attack</span>
                  </p>
                  <p>
                    <span>Defense</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{pokeTypes?.join(", ")}</span>
                  </p>
                  <p>
                    <span>{data.height}</span>
                  </p>
                  <p>
                    <span>{data.weight}</span>
                  </p>
                  <p>
                    <span>{data.stats[0]?.base_stat}</span>
                  </p>
                  <p>
                    <span>{data.stats[1]?.base_stat}</span>
                  </p>
                  <p>
                    <span>{data.stats[2]?.base_stat}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
