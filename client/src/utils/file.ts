// import { RcFile } from 'antd/lib/upload/interface';

export async function createImg(file?: Blob): Promise<null | HTMLImageElement> {
  if (!file) return Promise.resolve(null);
  const img = document.createElement('img');
  img.src = window.URL.createObjectURL(file);
  img.setAttribute('crossOrigin', 'anonymous');
  return new Promise((resolve) => {
    img.addEventListener('load', () => resolve(img));
  });
}

export function cropResize(
  img: HTMLImageElement,
  cropSize: number
): null | string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // crop to center
  const imgSize = Math.min(img.width, img.height);
  const dx = (img.width - imgSize) / 2;
  const dy = (img.height - imgSize) / 2;

  ctx.canvas.width = cropSize;
  ctx.canvas.height = cropSize;
  ctx.drawImage(img, dx, dy, imgSize, imgSize, 0, 0, cropSize, cropSize);

  return canvas.toDataURL('image/webp', 0.25);
}

export async function getCroppedBase64(file?: Blob): Promise<null | string> {
  const img = await createImg(file);
  if (!img) return null;
  const base64 = cropResize(img, 200);
  if (!base64) return null;
  return base64;
}

export function getBase64(file?: Blob): Promise<string | null> {
  if (!file) return Promise.resolve(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise<string | null>((resolve) =>
    reader.addEventListener(
      'load',
      () => resolve(reader.result as string | null),
      { once: true }
    )
  );
}
