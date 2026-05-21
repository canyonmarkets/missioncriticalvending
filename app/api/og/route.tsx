import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

/* Fetches a Google Font binary for satori/ImageResponse.
   Google serves different subsets per User-Agent, so we spoof a desktop Chrome UA
   to get the woff2 CSS, then extract the Latin-subset URL. */
async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&display=swap`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    }
  ).then((r) => r.text());

  // Grab all woff2 URLs; the last one is the latin subset
  const matches = [...css.matchAll(/src: url\(([^)]+)\) format\('woff2'\)/g)];
  const fontUrl = matches.at(-1)?.[1];
  if (!fontUrl) throw new Error(`No woff2 URL found for ${family} ${weight}`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export async function GET(req: NextRequest) {
  const variant = req.nextUrl.searchParams.get('v') ?? 'hero';
  const isNav = variant === 'nav';

  const fontData = await loadGoogleFont('Oswald', 700);

  /* Dimensions are tight around the rendered text.
     The img tags in the components constrain display size via CSS. */
  const fontSize   = isNav ? 34  : 118;
  const width      = isNav ? 520 : 1380;
  const height     = isNav ? 56  : 172;
  const color      = isNav ? '#252525' : '#F4F7FB';
  const letterSpacing = '0.12em';

  return new ImageResponse(
    (
      <div
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          width:          '100%',
          height:         '100%',
          background:     'transparent',
        }}
      >
        <span
          style={{
            fontFamily:    'Oswald',
            fontWeight:    700,
            fontSize,
            color,
            letterSpacing,
            lineHeight:    1,
            textTransform: 'uppercase',
            whiteSpace:    'nowrap',
          }}
        >
          CANYON MARKETS
        </span>
      </div>
    ),
    {
      width,
      height,
      fonts: [{ name: 'Oswald', data: fontData, weight: 700, style: 'normal' }],
    }
  );
}
