import React, { useEffect, useState } from "react";
import MainNav from "./Main-nav";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";
export default function visuals() {
  const navigate = useNavigate();
  return (
    
    <div className="min-h-screen flex flex-col">
    <div className="bg-gradient-to-r from-emerald-400 to-emerald-500">
        <MainNav />
      </div>
      <main className="flex-1 bg-emerald-100 p-4">
        <div className="max-w-7xl mx-auto bg-emerald-300 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Visualisations :</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/90 p-4 rounded-lg">
              <div className="relative h-80 w-full mb-4">
              <img src="../src/assets/pairplot.jpeg" alt="Pairplot visualization" className="object-contain h-full w-full" />
              </div>
              <p className="text-sm font-medium">
                Pairplot illustrating pairwise relationships and distributions across all features, enabling visual
                detection of patterns, correlations, and potential outliers in the dataset.
              </p>
            </Card>

            <Card className="bg-white/90 p-4 rounded-lg">
              <div className="relative h-80 w-full mb-4">
              <img src="../src/assets/distribution.jpeg" alt="Pairplot visualization" className="object-contain h-full w-full" />
              </div>
              <p className="text-sm font-medium">
                Distribution Plot of oldpeak — the data shows a right-skewed distribution, indicating that most patients
                have low oldpeak values, with a few exhibiting significantly higher values (potential outliers).
              </p>
            </Card>
          </div>

          <div className="mt-6">
            <Card className="bg-white/90 p-4 rounded-lg max-w-3xl mx-auto">
              <div className="relative h-80 w-full mb-4">
              <img src="../src/assets/boxplot.jpeg" alt="Pairplot visualization" className="object-contain h-full w-full" />
              </div>
              <p className="text-sm font-medium">
                Boxplot of All Features — highlights the distribution and spread of each variable. Notably, oldpeak,
                chol, and trestbps contain several outliers, indicating possible extreme physiological values or data
                entry variances.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
