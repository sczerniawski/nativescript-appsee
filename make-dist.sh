rm -rf dist && cp -r src dist && cd dist && rm -rf hooks typings node_modules tsconfig.json && find . -name "*.ts" ! -name "*.d.ts" | xargs rm && cd -
rm -f nativescript-appsee.tar.gz && tar -zcvf nativescript-appsee.tar.gz dist/
