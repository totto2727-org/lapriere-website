import type { ColorTheme } from "@/feature/theme"
import { ColorThemePopupButton } from "@/feature/theme/component"
import { Ul, container, dropDown, dropDownContent } from "@/feature/ui"
import { Slot, component$ } from "@builder.io/qwik"
import { globalNavigationContents } from "@/feature/content"

export const BaseHeaderView = component$<{ theme: ColorTheme }>(({ theme }) => {
  return (
    <header class="bg-base-200">
      <nav
        class={container({
          class: "navbar",
          y: "disable",
        })}
      >
        <a
          href="/"
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          class="btn btn-ghost h-auto max-w-[50%] animate-none break-words break-keep text-xl"
        >
          La prière
          <wbr /> 非公式ファンサイト
        </a>

        {globalNavigationContents.map((nav) => (
          <nav
            class={dropDown.class({ class: "max-sm:hidden" })}
            style={dropDown.style}
          >
            <BaseHeaderDropDownTrigger>
              {nav.shotName ?? nav.name}
            </BaseHeaderDropDownTrigger>
            <Ul role="list" class={dropDownContent()}>
              {nav.contents.map((content) => (
                <li>
                  <content.Link>
                    {content.shortName ?? content.name}
                  </content.Link>
                </li>
              ))}
            </Ul>
          </nav>
        ))}

        <div class="ml-auto flex flex-row gap-4">
          <ColorThemePopupButton theme={theme} />
        </div>
      </nav>
    </header>
  )
})

export const BaseHeaderDropDownTrigger = component$(() => {
  return (
    <div
      tabIndex={0}
      role="button"
      class="btn btn-ghost animate-none whitespace-nowrap"
    >
      <Slot />
    </div>
  )
})
