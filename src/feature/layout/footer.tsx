import { component$ } from '@builder.io/qwik'

import { globalNavigationContents } from '@/feature/content'
import { cx } from '@/feature/style'
import { container, ExternalLink } from '@/feature/ui'
import DeviconGithub from '~icons/devicon/github'
import DeviconTwitter from '~icons/devicon/twitter'

const DEFAULT = {
  marginTop: true,
}

export const BaseFooter = component$<{ marginTop?: boolean }>((props) => {
  return (
    <div
      class={cx('bg-base-200', {
        'mt-auto': props.marginTop ?? DEFAULT.marginTop,
      })}
    >
      <div
        class={container({
          class:
            'grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-12 gap-y-6 place-items-center mb-10',
        })}
      >
        <footer class="flex flex-col items-center justify-center gap-4 ">
          <a
            tabIndex={0}
            class="btn btn-ghost my-auto h-auto w-full animate-none overflow-x-hidden break-keep text-lg"
          >
            La prière
            <wbr />
            {' '}
            非公式ファンサイト
          </a>
          <div class="flex animate-none flex-row gap-4 [&_>_a]:btn [&_>_a]:btn-ghost">
            <ExternalLink
              href="https://twitter.com/totto0727"
              title="管理人のXアカウントを新しいタブで開く"
            >
              <DeviconTwitter class="-m-1 aspect-square size-6" />
            </ExternalLink>
            <ExternalLink
              href="https://github.com/totto2727-org/lapriere-website"
              title="本サイトのGitHubリポジトリを新しいタブで開く"
            >
              <DeviconGithub class="-m-3 aspect-square size-8" />
            </ExternalLink>
          </div>
        </footer>

        <footer
          // 最初と最後のマージンを打ち消す
          class={cx(
            'mr-auto flex flex-row flex-wrap gap-x-12 gap-y-4 max-sm:w-full max-sm:justify-evenly',
            '[&_>_:first-child]:ml-0 [&_>_:first-child]:pl-0 [&_>_:last-child]:mr-0 [&_>_:last-child]:pr-0',
          )}
        >
          {globalNavigationContents.map(navigation => (
            <nav class="flex flex-col gap-2">
              <h1 class="text-xl font-bold">{navigation.name}</h1>
              {navigation.contents.map(content => (
                <content.Link class="link-hover link">
                  {content.name}
                </content.Link>
              ))}
            </nav>
          ))}
        </footer>
      </div>
    </div>
  )
})
