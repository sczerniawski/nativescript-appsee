# Compile the plugin for distribution
cd src && npm run build && cd -
rm -rf dist && cp -r src dist && cd dist && rm -rf hooks typings node_modules tsconfig.json && find . -name "*.ts" ! -name "*.d.ts" | xargs rm && cd -
cd src && npm run _clean && cd -

# Archive the plugin for distribution
PACKAGE_NAME=nativescript-appsee.tar.gz
rm -f $PACKAGE_NAME && tar -zcvf $PACKAGE_NAME dist/
