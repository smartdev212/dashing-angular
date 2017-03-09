import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PortfolioEffects, RiskEffects, StockEffects, SymbolEffects } from './common/effects';

import { reducer } from './common/reducers';

import { PortfolioService, RiskService, StockService, SymbolService } from './common/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { StocksComponent } from './stocks/stocks.component';
import { PortfolioListComponent } from './portfolios/portfolio-list/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details/portfolio-details.component';
import { ActivePortfoliosComponent } from './portfolios/active-portfolios/active-portfolios.component';
import { PortfoliosByRiskComponent } from './portfolios/portfolios-by-risk/portfolios-by-risk.component';
import { StockHistoryComponent } from './stocks/stock-history/stock-history.component';
import { SymbolsComponent } from './stocks/symbols/symbols.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfoliosComponent,
    StocksComponent,
    PortfolioListComponent,
    PortfolioDetailsComponent,
    ActivePortfoliosComponent,
    PortfoliosByRiskComponent,
    StockHistoryComponent,
    SymbolsComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(PortfolioEffects),
    EffectsModule.run(RiskEffects),
    EffectsModule.run(StockEffects),
    EffectsModule.run(SymbolEffects)
  ],
  providers: [
    PortfolioService,
    StockService,
    RiskService,
    SymbolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
