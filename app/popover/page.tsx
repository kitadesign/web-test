export default function PagePopover() {
  return (
    <main>
      <div className='w-full block mx-auto p-24 text-center'>
        <h2 className='mb-10'>Popover</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button popovertarget='mypopover' popovertargetaction='show'>
            Show popover
          </button>
          <div id='mypopover' popover class="w-1/2 border-2 rounded">
            <h2 class="font-bold">Popover heading</h2>
            <p class="mt-2">
              This here is some very important content that we want to draw your
              attention to before you light dismiss it. Read it all, do not
              delay!
            </p>
            <button class="mt-2" popovertarget="mypopover" popovertargetaction="hide">Close</button>
          </div>`,
          }}
        ></div>
        {/* TODO: popoverがReact上ではうまく動かない、原因を探る */}
        {/* <button popovertarget='mypopover' popovertargetaction='show'>
          Show popover
        </button>
        <div id='mypopover' popover>
          <h2>Popover heading</h2>
          <p>
            This here is some very important content that we want to draw your
            attention to before you light dismiss it. Read it all, do not delay!
          </p>
          <button popovertarget='mypopover' popovertargetaction='hide'>
            Close
          </button>
        </div> */}
      </div>
    </main>
  )
}
