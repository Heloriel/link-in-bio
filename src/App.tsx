import { gql, useQuery } from "@apollo/client";
import { CircleNotch } from "phosphor-react";
import { Icons } from "./components/icons";

interface PersonalLinks {
  id: string;
  title: string;
  url: string;
  icon: string;
}

function App() {
  const GET_LINKS_QUERY = gql`
    query GetPersonalLinks {
      personalLinks(orderBy: order_ASC) {
        id
        url
        title
        icon
      }
    }
  `;

  const { data, loading } = useQuery<{ personalLinks: PersonalLinks[] }>(GET_LINKS_QUERY);

  if (!data || !data.personalLinks) {
    return (
      <div className="flex w-full min-h-screen items-center justify-center">
        <CircleNotch size={64} color="#fff" className="animate-spin" />
      </div>
    );
  }

  return (
    <main className="flex flex-col w-full min-h-screen items-center text-white px-2">
      <div className="flex items-center mt-16 flex-col w-full md:w-2/4 lg:w-1/4 bg-zinc-800 rounded-lg px-4 py-16 relative top-0">
        <div className="min-w-[100px] max-w-[100px] min-h-[100px] max-h-[100px] mb-4 absolute top-[-50px]">
          <img src="https://github.com/andradematheusdev.png" alt="Profile Picture" className="rounded-full border-4 border-violet-500" />
        </div>
        <div className="mb-4">
          <span>@andradematheus</span>
        </div>
        <ul className="links-list flex flex-col items-center w-full">
          {data.personalLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} target={"_blank"}>
                  <span className="flex items-center justify-center">
                    {link.icon ? Icons[link.icon as keyof typeof Icons] : <></>}
                    {link.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
