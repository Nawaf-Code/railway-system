using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using RailWaySystem.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<TravelContext>(
    options=>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Travel"))
);

builder.Services.AddDbContext<UsersBookingContext>(
    options=>
    options.UseSqlServer(builder.Configuration.GetConnectionString("UsersBooking"))
);

builder.Services.AddDbContext<UserContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("User"))
);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

// cd code/dotnet-projects/RailWaySystem