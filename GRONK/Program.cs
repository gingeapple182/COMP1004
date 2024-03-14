//var builder = WebApplication.CreateBuilder(args);
//var app = builder.Build();


public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
    if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
    }

    app.UseRouting();
    app.UseDefaultFiles();
    app.UseStaticFiles();
}
//app.MapGet("/", () => "Hello stoopid World!");

//app.Run();
