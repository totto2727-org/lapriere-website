import { component$ } from "@builder.io/qwik"
import { globalNavigationContents } from "@/feature/content"

export const HomeNavigationMenu = component$(() => {
  return (
    <div class="flex flex-row flex-wrap gap-x-12 gap-y-0">
      {globalNavigationContents.map((nav) => (
        <div>
          <h2>{nav.name}</h2>
          <ul>
            {nav.contents.map((content) => (
              <li>
                <content.Link class="link inline-block w-full">
                  {content.name}
                </content.Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
})
