module.exports = {
    async preRender(page) {
      // Preparar página para testes
    },
    async postRender(page, context) {
      // Executar testes de acessibilidade em cada story
      const a11yResults = await page.evaluate(() => {
        return axe.run();
      });
      
      // Verificar se há violações de acessibilidade
      expect(a11yResults.violations).toEqual([]);
    },
  };