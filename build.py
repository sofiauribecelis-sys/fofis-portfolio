#!/usr/bin/env python3
"""Construye dist/index.html (archivo único, listo para publicar) a partir de src/ y assets/.

Uso:  python3 build.py
Solo usa la librería estándar de Python.
"""
import base64, json, os, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')


def read(path):
    with open(os.path.join(ROOT, path), encoding='utf-8') as f:
        return f.read()


def build():
    order = json.loads(read('src/build-order.json'))
    manifest = json.loads(read('src/data/images.json'))

    # Imágenes -> base64 incrustado (IMG) y proporciones (AR)
    files = {m['key']: m for m in manifest['images']}
    img = {}
    for key in manifest['order_img']:
        m = files[key]
        with open(os.path.join(ROOT, 'assets', 'img', m['file']), 'rb') as f:
            img[key] = 'data:image/%s;base64,%s' % (m['mime'], base64.b64encode(f.read()).decode('ascii'))
    ar = {k: manifest['ratios'][k] for k in manifest['order_ar']}

    head = '  var IMG = %s;\n  var AR = %s;\n' % (json.dumps(img), json.dumps(ar))
    js_body = ''.join(read(p) for p in order['js'])
    css_body = ''.join(read(p) for p in order['css'])

    html = read('src/index.template.html')
    html = html.replace('/*__CSS__*/', css_body[:-1]).replace('/*__JS__*/', (head + js_body)[:-1])

    os.makedirs(os.path.join(ROOT, 'dist'), exist_ok=True)
    out = os.path.join(ROOT, 'dist', 'index.html')
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print('OK -> %s (%.1f MB)' % (out, os.path.getsize(out) / 1e6))


if __name__ == '__main__':
    sys.exit(build())
